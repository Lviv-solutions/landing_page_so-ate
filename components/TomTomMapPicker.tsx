"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import type tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

const TOMTOM_SEARCH_URL = "https://api.tomtom.com/search/2/search";
const TOMTOM_REVERSE_GEOCODE_URL = "https://api.tomtom.com/search/2/reverseGeocode";

export interface LocationResult {
  latitude: number;
  longitude: number;
  formattedAddress: string | null;
}

interface TomTomMapPickerProps {
  /** Initial center [lng, lat] */
  initialCenter?: [number, number];
  /** Initial zoom (default 14) */
  initialZoom?: number;
  /** Called when user selects a location (click, drag, or search) */
  onLocationChange: (result: LocationResult) => void;
  /** Optional API key (prefer NEXT_PUBLIC_TOMTOM_API_KEY env) */
  apiKey?: string;
  /** Placeholder for search input */
  searchPlaceholder?: string;
  /** Optional class name for the container */
  className?: string;
  /** Disable map interactions */
  disabled?: boolean;
}

function getApiKey(): string {
  if (typeof window === "undefined") return "";
  return process.env.NEXT_PUBLIC_TOMTOM_API_KEY ?? "";
}

/** Format reverse geocode response into a single address string */
function formatAddressFromReverseGeocode(data: {
  addresses?: Array<{ address?: { freeformAddress?: string; streetNumber?: string; streetName?: string; municipality?: string; country?: string } }>;
}): string | null {
  const addr = data?.addresses?.[0]?.address;
  if (!addr) return null;
  if (addr.freeformAddress) return addr.freeformAddress;
  const parts = [addr.streetNumber, addr.streetName, addr.municipality, addr.country].filter(Boolean);
  return parts.length ? parts.join(", ") : null;
}

/** TomTom Search API: fuzzy search for addresses/POI */
async function searchLocation(
  query: string,
  apiKey: string
): Promise<{ position: { lat: number; lon: number }; address?: { freeformAddress?: string } } | null> {
  const url = `${TOMTOM_SEARCH_URL}/${encodeURIComponent(query)}.json?key=${encodeURIComponent(apiKey)}&limit=1`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const json = await res.json();
  const item = json?.results?.[0];
  if (!item?.position) return null;
  return {
    position: item.position,
    address: item.address,
  };
}

/** TomTom Reverse Geocoding: coordinates → address */
async function reverseGeocode(
  lat: number,
  lon: number,
  apiKey: string
): Promise<string | null> {
  const url = `${TOMTOM_REVERSE_GEOCODE_URL}/${lat.toFixed(6)},${lon.toFixed(6)}.json?key=${encodeURIComponent(apiKey)}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  return formatAddressFromReverseGeocode(data);
}

export default function TomTomMapPicker({
  initialCenter = [46.6753, 24.7136],
  initialZoom = 14,
  onLocationChange,
  apiKey: apiKeyProp,
  searchPlaceholder = "Search for an address...",
  className = "",
  disabled = false,
}: TomTomMapPickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<tt.Map | null>(null);
  const markerRef = useRef<tt.Marker | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const apiKey = apiKeyProp || getApiKey();

  const updateLocation = useCallback(
    async (lat: number, lng: number, formattedAddress?: string | null) => {
      let address = formattedAddress;
      if (address === undefined && apiKey) {
        address = await reverseGeocode(lat, lng, apiKey);
      }
      onLocationChange({
        latitude: lat,
        longitude: lng,
        formattedAddress: address ?? null,
      });
    },
    [apiKey, onLocationChange]
  );

  useEffect(() => {
    if (!containerRef.current || !apiKey) return;

    let map: tt.Map | null = null;
    let marker: tt.Marker | null = null;

    const initMap = async () => {
      const tt = await import("@tomtom-international/web-sdk-maps");
      tt.default.setProductInfo("so-eat", "1.0");

      map = tt.default.map({
        key: apiKey,
        container: containerRef.current!,
        center: initialCenter,
        zoom: initialZoom,
      });

      mapRef.current = map;

      map.on("load", () => {
        marker = new tt.default.Marker({
          draggable: true,
          color: "#ED614A",
        })
          .setLngLat(initialCenter)
          .addTo(map!);
        markerRef.current = marker;

        marker.on("dragend", () => {
          const lngLat = marker!.getLngLat();
          updateLocation(lngLat.lat, lngLat.lng);
        });

        map!.on("click", (e) => {
          if (disabled) return;
          const { lng, lat } = e.lngLat;
          marker!.setLngLat([lng, lat]);
          updateLocation(lat, lng);
        });

        updateLocation(initialCenter[1], initialCenter[0]);
        setIsLoaded(true);
      });
    };

    initMap();

    return () => {
      if (marker) marker.remove();
      if (map) map.remove();
      mapRef.current = null;
      markerRef.current = null;
    };
  }, [apiKey, initialCenter[0], initialCenter[1], initialZoom, disabled, updateLocation]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q || !apiKey) {
      setSearchError(apiKey ? "Enter an address to search." : "TomTom API key is missing.");
      return;
    }
    setSearchError(null);
    setIsSearching(true);
    try {
      const result = await searchLocation(q, apiKey);
      if (!result) {
        setSearchError("No results found.");
        return;
      }
      const { position, address } = result;
      const lat = position.lat;
      const lng = position.lon;
      const formattedAddress = address?.freeformAddress ?? null;

      if (mapRef.current) {
        mapRef.current.flyTo({ center: [lng, lat], zoom: 16 });
      }
      if (markerRef.current) {
        markerRef.current.setLngLat([lng, lat]);
      }
      onLocationChange({
        latitude: lat,
        longitude: lng,
        formattedAddress,
      });
      setSearchQuery("");
    } catch {
      setSearchError("Search failed. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  if (!apiKey) {
    return (
      <div
        className={className}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 300,
          background: "#f5f5f5",
          borderRadius: 16,
          color: "#666",
        }}
      >
        Map unavailable: TomTom API key not configured (NEXT_PUBLIC_TOMTOM_API_KEY).
      </div>
    );
  }

  return (
    <div className={className} style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          minHeight: 300,
          borderRadius: 16,
          overflow: "hidden",
          pointerEvents: disabled ? "none" : "auto",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          right: 16,
          zIndex: 10,
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        <form onSubmit={handleSearch} style={{ flex: "1 1 200px", minWidth: 0, display: "flex", gap: 8 }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSearchError(null);
            }}
            placeholder={searchPlaceholder}
            disabled={!isLoaded || isSearching}
            style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: 8,
              border: "1px solid #e0e0e0",
              fontSize: 14,
              outline: "none",
            }}
          />
          <button
            type="submit"
            disabled={!isLoaded || isSearching}
            style={{
              padding: "10px 16px",
              borderRadius: 8,
              border: "none",
              background: "#ED614A",
              color: "white",
              fontWeight: 600,
              cursor: isLoaded && !isSearching ? "pointer" : "not-allowed",
            }}
          >
            {isSearching ? "..." : "Search"}
          </button>
        </form>
      </div>
      {searchError && (
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 16,
            right: 16,
            zIndex: 10,
            padding: "8px 12px",
            background: "#fff3f3",
            color: "#c62828",
            borderRadius: 8,
            fontSize: 13,
          }}
        >
          {searchError}
        </div>
      )}
    </div>
  );
}

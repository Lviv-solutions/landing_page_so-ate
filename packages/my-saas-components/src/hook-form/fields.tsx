"use client";
import { RHFCode } from "./rhf-code";
import { RHFRating } from "./rhf-rating";
// import { RHFEditor } from './rhf-editor'; // Temporarily disabled - has highlight.js dependency issues
import { RHFSlider } from "./rhf-slider";
import { RHFTextField } from "./rhf-text-field";
import { RHFRadioGroup } from "./rhf-radio-group";
import { RHFPhoneInput } from "./rhf-phone-input";
import { RHFNumberInput } from "./rhf-number-input";
import { RHFAutocomplete } from "./rhf-autocomplete";
import { RHFCountrySelect } from "./rhf-country-select";
import { RHFSwitch, RHFMultiSwitch } from "./rhf-switch";
import { RHFSelect, RHFMultiSelect } from "./rhf-select";
import { RHFCheckbox, RHFMultiCheckbox } from "./rhf-checkbox";
// import { RHFUpload, RHFUploadBox, RHFUploadAvatar } from './rhf-upload'; // Temporarily disabled
import { RHFDatePicker, RHFTimePicker, RHFDateTimePicker } from "./rhf-date-picker";

// ----------------------------------------------------------------------

export const Field = {
  Code: RHFCode,
  // Editor: RHFEditor, // Temporarily disabled - has highlight.js dependency issues
  Select: RHFSelect,
  // Upload: RHFUpload, // Temporarily disabled
  Switch: RHFSwitch,
  Slider: RHFSlider,
  Rating: RHFRating,
  Text: RHFTextField,
  Phone: RHFPhoneInput,
  Checkbox: RHFCheckbox,
  // UploadBox: RHFUploadBox, // Temporarily disabled
  RadioGroup: RHFRadioGroup,
  NumberInput: RHFNumberInput,
  MultiSelect: RHFMultiSelect,
  MultiSwitch: RHFMultiSwitch,
  // UploadAvatar: RHFUploadAvatar, // Temporarily disabled
  Autocomplete: RHFAutocomplete,
  MultiCheckbox: RHFMultiCheckbox,
  CountrySelect: RHFCountrySelect,
  // Pickers
  DatePicker: RHFDatePicker,
  TimePicker: RHFTimePicker,
  DateTimePicker: RHFDateTimePicker,
};

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import StylishDropdown from "./StylishDropdown";

// Demo Component: Shows usage of StylishDropdown
export default function Demo() {
  // State for selected value
  const [selectedValue, setSelectedValue] = useState("");

  // Handler for selection changes
  const handleChange = (option) => {
    setSelectedValue(option.value);
    console.log("Selected:", option);
  };

  // Sample options for the demo
  const options = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue.js" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "react", label: "React" },
    { value: "vue", label: "Vue.js" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "react", label: "React" },
    { value: "vue", label: "Vue.js" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "react", label: "React" },
    { value: "vue", label: "Vue.js" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-8 bg-gray-50 rounded-lg">

      {/* StylishDropdown Implementation */}
      <StylishDropdown
        options={options}
        onChange={handleChange}
        placeholder="Select framework"
      />

    </div>
  );
}

// // StylishDropdown Component: A reusable dropdown component with search functionality
// const StylishDropdown = ({
//   // Default props with sample options
//   options = [
//     { value: "option1", label: "Option 1" },
//     { value: "option2", label: "Option 2" },
//     { value: "option3", label: "Option 3" },
//     { value: "option4", label: "Option 4" },
//   ],
//   defaultValue = "", // Initial selected value
//   onChange = () => {}, // Callback function when selection changes
//   placeholder = "Select an option", // Placeholder text when nothing is selected
//   className = "", // Additional CSS classes
// }) => {
//   // State management
//   const [isOpen, setIsOpen] = useState(false); // Controls dropdown visibility
//   const [selectedOption, setSelectedOption] = useState(defaultValue); // Tracks selected option
//   const dropdownRef = useRef(null); // Reference for click outside detection

//   // Handles option selection
//   const handleOptionClick = (option) => {
//     setSelectedOption(option.value); // Update selected value
//     onChange(option); // Trigger onChange callback
//     setIsOpen(false); // Close dropdown
//   };

//   // Handles clicking outside the dropdown to close it
//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   // Setup click outside listener
//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     // Cleanup listener on component unmount
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Get the label of selected option or use placeholder
//   const selectedLabel =
//     options.find((option) => option.value === selectedOption)?.label ||
//     placeholder;

//   return (
//     <div className={`relative w-64 ${className}`} ref={dropdownRef}>
//       {/* Dropdown Button */}
//       <button
//         type="button"
//         className="flex items-center justify-between w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-haspopup="listbox"
//         aria-expanded={isOpen}
//       >
//         {/* Selected Option Display */}
//         <span
//           className={`block truncate ${
//             !selectedOption ? "text-gray-500" : "text-gray-900"
//           }`}
//         >
//           {selectedLabel}
//         </span>
//         {/* Dropdown Arrow Icon */}
//         <ChevronDown
//           className={`ml-2 h-5 w-5 text-gray-400 transition-transform duration-200 ${
//             isOpen ? "transform rotate-180" : ""
//           }`}
//         />
//       </button>

//       {/* Dropdown Options List */}
//       {isOpen && (
//         <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none">
//           <ul className="py-1" role="listbox">
//             {options.map((option) => (
//               <li
//                 key={option.value}
//                 className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-blue-50 transition-colors ${
//                   option.value === selectedOption
//                     ? "bg-blue-100 text-blue-900"
//                     : "text-gray-900"
//                 }`}
//                 onClick={() => handleOptionClick(option)}
//                 role="option"
//                 aria-selected={option.value === selectedOption}
//               >
//                 {/* Option Label */}
//                 <span className="block truncate font-medium">
//                   {option.label}
//                 </span>
//                 {/* Checkmark for Selected Option */}
//                 {option.value === selectedOption && (
//                   <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
//                     <svg
//                       className="h-5 w-5"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </span>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };







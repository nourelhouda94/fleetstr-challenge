import { useState } from "react";
import { DateRange, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main styles
import "react-date-range/dist/theme/default.css"; // Theme styles
import { format, subDays, startOfDay, endOfDay } from "date-fns";
import { FaMapMarkerAlt, FaCalendarAlt, FaChevronDown } from "react-icons/fa";

/**
 * List of available location options.
 */
const locationOptions = ["All Locations", "Fleetster HQ", "Branch 1", "Branch 2"];

/**
 * List of preset time filter options.
 */
const timeOptions = ["All Time", "Today", "Yesterday", "Last 7 Days", "Last 30 Days", "Custom"];

export default function Filters({
  onFilterChange,
}: {
  onFilterChange: (filter: string, location: string, startDate?: string, endDate?: string) => void;
}) {
  const [selectedLocation, setSelectedLocation] = useState(locationOptions[0]);
  const [selectedTime, setSelectedTime] = useState("All Time");
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  /**
   * Updates the date range based on preset selection.
   */
  const handlePresetSelection = (preset: string) => {
    setSelectedTime(preset);

    if (preset === "Custom") {
      setShowCalendar(true);
      return;
    }

    let startDate = new Date();
    let endDate = new Date();

    switch (preset) {
      case "Yesterday":
        startDate = subDays(startOfDay(new Date()), 1);
        endDate = endOfDay(subDays(new Date(), 1));
        break;
      case "Last 7 Days":
        startDate = subDays(startOfDay(new Date()), 6);
        endDate = endOfDay(new Date());
        break;
      case "Last 30 Days":
        startDate = subDays(startOfDay(new Date()), 29);
        endDate = endOfDay(new Date());
        break;
      case "All Time":
        onFilterChange("All Time", selectedLocation);
        return;
      default: // Today
        startDate = startOfDay(new Date());
        endDate = endOfDay(new Date());
        break;
    }

    setDateRange([{ startDate, endDate, key: "selection" }]);
    setShowCalendar(false);

    onFilterChange("Custom", selectedLocation, format(startDate, "yyyy-MM-dd"), format(endDate, "yyyy-MM-dd"));
  };

  /**
   * Handles location selection changes.
   */
  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedLocation(value);
    onFilterChange(selectedTime, value, format(dateRange[0].startDate, "yyyy-MM-dd"), format(dateRange[0].endDate, "yyyy-MM-dd"));
  };

  /**
   * Handles date range selection changes (for Custom Selection).
   */
  const handleDateChange = (rangesByKey: RangeKeyDict) => {
    const newRange = rangesByKey.selection;
    const updatedStartDate = newRange.startDate ?? new Date();
    const updatedEndDate = newRange.endDate ?? new Date();

    setDateRange([{ startDate: updatedStartDate, endDate: updatedEndDate, key: "selection" }]);
    setSelectedTime("Custom");
    setShowCalendar(false); // Close the calendar after selecting dates

    setTimeout(() => setShowCalendar(false), 200); // Ensures UI updates correctly

    onFilterChange(
      "Custom",
      selectedLocation,
      format(updatedStartDate, "yyyy-MM-dd"),
      format(updatedEndDate, "yyyy-MM-dd")
    );
  };

  return (
    <div className="filters-container flex gap-4 relative">
      {/* Location Filter */}
      <div className="custom-select">
        <FaMapMarkerAlt className="custom-icon location-icon" />
        <select className="filter-dropdown" value={selectedLocation} onChange={handleLocationChange}>
          {locationOptions.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        <FaChevronDown className="custom-arrow" />
      </div>

      {/* Time Range Filter */}
      <div className="custom-select">
        <FaCalendarAlt className="custom-icon calendar-icon" />
        <select
          className="filter-dropdown"
          value={selectedTime}
          onChange={(e) => handlePresetSelection(e.target.value)}
        >
          {timeOptions.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <FaChevronDown className="custom-arrow" />
      </div>

      {/* Date Range Picker Button (Only Shown for Custom Selection) */}
      {selectedTime === "Custom" && (
        <div className="relative">
          <button
            onClick={() => setShowCalendar(!showCalendar)}
            className="date-input"
          >
            {format(dateRange[0].startDate, "dd/MM/yyyy")} - {format(dateRange[0].endDate, "dd/MM/yyyy")}
          </button>

          {/* Date Range Picker (Visible When Clicked) */}
          {showCalendar && (
            <div className="absolute top-full right-0 z-50 bg-white shadow-lg border rounded-xs mt-2">
              <DateRange
                ranges={dateRange}
                onChange={handleDateChange}
                moveRangeOnFirstSelection={false}
                months={1}
                direction="horizontal"
                rangeColors={["#1d88bb"]}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
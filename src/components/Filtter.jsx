import { useState, useEffect, useRef } from "react";

export default function BMSLanguageFilter(filtterElement) {
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);
  const allLanguages = [
    "English",
    "Hindi",
    "Tamil",
    "Telugu",
    "Kannada",
    "Malayalam",
    "Punjabi",
    "Gujarati",
    "Bengali"
  ];

  const [selected, setSelected] = useState([]);

  const toggleDropdown = () => setOpen(!open);

  const updateSelection = (lang) => {
    if (selected.includes(lang)) {
      setSelected(selected.filter((l) => l !== lang));
    } else {
      setSelected([...selected, lang]);
    }
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: "relative", display: "inline-block" }}>
      
      {/* BUTTON */}
      <button
        onClick={toggleDropdown}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          padding: "10px 16px",
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "20px",
          cursor: "pointer",
          minWidth: "200px",
          fontSize: "14px",
        }}
      >
        
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ fontWeight: 600 }}>Language</span>
          <span style={{ fontSize: "12px", opacity: 0.6 }}>
            {open ? "▲" : "▼"}
          </span>
        </div>

        {/* {selected.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, auto)",
              gap: "4px 8px",
              maxHeight: "70px",
              overflow: "hidden",
            }}
          >
            {selected.map((lang) => (
              <span
                key={lang}
                style={{
                  background: "#f2f2f2",
                  padding: "3px 8px",
                  borderRadius: "10px",
                  fontSize: "12px",
                  whiteSpace: "nowrap"
                }}
              >
                {lang}
                {filtterElement.filtterElement(selected)}
              </span>
            ))}
          </div>
        )} */}
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: 0,
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            padding: "14px",
            width: "260px",
            zIndex: 100,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",   // 3 columns grid
              gap: "10px 12px",
            }}
          >
            {allLanguages.map((lang) => (
              <div
                key={lang}
                onClick={() => updateSelection(lang)}
                style={{
                  padding: "6px 8px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  background: selected.includes(lang) ? "#e8e8e8" : "#fff",
                  textAlign: "center",
                  border: selected.includes(lang)
                    ? "1px solid #aaa"
                    : "1px solid #ddd",
                  fontSize: "13px",
                }}
              >
                {lang}
                {filtterElement.filtterElement(selected)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

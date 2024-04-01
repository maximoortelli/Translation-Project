import{ useState } from "react";
import { useTranslation } from "react-i18next";


const Header = () => {
  const [t, i18n] = useTranslation("global");
  const [selectedOption, setSelectedOption] = useState("usa");
  const [selectedFlag, setSelectedFlag] = useState("../usa_flag.png");
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState([
    { value: "usa", label: "Eng", image: "../usa_flag.png" },
    { value: "spain", label: "Esp", image: "../spain.svg" },
    { value: "germany", label: "Deu", image: "../Flag_of_Germany.svg.png" },
    { value: "japan", label: "Jpn", image: "../Flag_of_Japan.svg.png" },
  ]);
  
  const handleOptionChange = (option, flag) => {
    setSelectedOption(option);
    setSelectedFlag(flag);
    if (option === "usa") {
      i18n.changeLanguage("en");
    } else if (option === "spain") {
      i18n.changeLanguage("es");
    } else if (option === "germany") {
      i18n.changeLanguage("de");
    } else if (option === "japan") {
      i18n.changeLanguage("jp");
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1>{t("header.hello-world")}</h1>
      <h1>{t("banner.bannerpa")}</h1>

      <div className={`drop-down ${isOpen ? 'open' : ''}`}>
        <div className="wrapper" onClick={toggleMenu}>
          <img src={selectedFlag} className="selectedImg" alt="" />
          <div className="selected">{options.find((opt) => opt.value == selectedOption)?.label}</div>
        </div>
        {isOpen && (
          <div className="list">
            {options.map((opt, index) => (
              <div className="item" key={index} onClick={() => handleOptionChange(opt.value, opt.image)}>
                <img src={opt.image} className="selectedImg"/>
                <div className="selected text">{opt.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

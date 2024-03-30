import{ useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [t, i18n] = useTranslation("global");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (option === "usa") {
      i18n.changeLanguage("en");
    } else if (option === "spain") {
      i18n.changeLanguage("es");
    }
  };

  return (
    <div>
      <h1>{t("header.hello-world")}</h1>
      <h1>{t("banner.bannerpa")}</h1>
      <select
        value={selectedOption}
        onChange={(e) => handleOptionChange(e.target.value)}
      >
        <option value="usa">
          <img src="../usa_flag.png" alt="USA Flag" />us United States 
        </option>
        <option value="spain">
          <img src="spain_flag.png" alt="Spain Flag" /> 🇪🇸 España
        </option>
        <option value="germany">
          <img src="germany_flag.png" alt="Germany Flag" /> 🇩🇪 Alemania
        </option>
      </select>
    </div>
  );
};

export default Header;

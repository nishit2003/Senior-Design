import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="dog ad"
        src="https://tastythriftytimely.com/wp-content/uploads/2023/01/3-Ingredient-Dog-Treats-Featured.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Happy Paws</Typography>
        <Typography color={medium}>happypaws.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Give your best friend the care they deserve! Discover premium dog
        treats, toys, and grooming essentials at Happy Paws. Tail-wagging
        quality delivered to your door.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;

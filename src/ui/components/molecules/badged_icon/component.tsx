import Icon from "react-native-vector-icons/FontAwesome";
import Badge from "../../atoms/badge/component";
import Theme from "../../../theme";
import BadgedIconProps from "./props";

export default function BadgedIcon({
  icon,
  iconSize,
  iconColor,
  backgroundColor,
  children,
  badgeStyle = {},
  badgeContentStyle = {},
  onPress
}: BadgedIconProps) {
  return (
    <Icon.Button
      name={icon}
      size={iconSize}
      color={iconColor ?? light}
      underlayColor={transparent}
      backgroundColor={backgroundColor ?? transparent}
      style={{zIndex: 90}}
      onPress={() => onPress?.()}
    >
      {children && (
        <Badge style={badgeStyle} contentStyle={badgeContentStyle}>
          {children}
        </Badge>
      )}
    </Icon.Button>
  );
}

const { light, transparent } = Theme;

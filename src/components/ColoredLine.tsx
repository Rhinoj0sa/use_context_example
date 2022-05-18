type Color = "#FFFFFF" | "#FF0000" | "#0000FF";
export const WHITE: Color = "#FFFFFF";
export const RED: Color = "#FF0000";
export const BLUE: Color = "#0000FF";

export const ColoredLine = () => (
    <hr
        style={{
            color: "#ff0000",
            backgroundColor: "#ff0000",
            height: 5
        }}
    />
);

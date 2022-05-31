import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  List,
  ListItem,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { WishForm } from "./components/WishForm";
import { getWishes, Wish } from "./services/wishes";

const theme = createTheme({
  typography: {
    fontFamily: `'Noto Sans', sans-serif`,
    fontWeightRegular: 600,
  },
  palette: {
    mode: "dark",
    background: {
      default: "#131924",
    },
    primary: {
      main: "#4d88ff",
    },
    secondary: {
      main: "#a9a9a9",
    },
  },
});

//export things implicitly, not default
//FC= functional component
export const App: FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    getWishes().then(setWishes);
  }, []);

  console.log(wishes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WishForm />
      <List>
        {wishes.map((wish) => {
          return <ListItem key={wish.name}>{wish.name}</ListItem>;
        })}
      </List>
    </ThemeProvider>
  );
};

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "./";
import Image from "./Image";
//import Image from 'mui-image';

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <Image/>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;

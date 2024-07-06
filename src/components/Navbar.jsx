import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "./";
//import Image from 'mui-image';

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
    <img src="https://cdn-icons-png.flaticon.com/512/3665/3665989.png" style={{height:80, width:60}}/>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;

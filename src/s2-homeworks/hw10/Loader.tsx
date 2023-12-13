import s from './Loader.module.css'
import {CircularProgress} from "@mui/material";

export const Loader = () => <CircularProgress size={"5rem"} className={s.loader} color="secondary"/>

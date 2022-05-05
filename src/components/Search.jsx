import {TextField, InputAdornment} from "@mui/material";
import {SearchRounded} from "@mui/icons-material";

const Search = (props) => {
    const {onChange, value} = props;

    return <TextField
        label={'search'}
        variant={"standard"}
        fullWidth
        type='search'
        value={value}
        onChange={onChange}
        sx={
            {mb: "1rem"}
        }
        InputProps={{
            endAdornment: (
                <InputAdornment position="start">
                    <SearchRounded/>
                </InputAdornment>
            )
        }}
    />;
};

export default Search;
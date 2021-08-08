import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { search } from "../redux/playlistSlice";
import { Grid, GridItem } from "@chakra-ui/react";
import { getOptions } from "../assets/spotify";
import { Select } from "../components/Select";
import Search from "../components/Search";
import sample from "../assets/sample";
import Track from "../components/Track";
import CreatePlaylist from "../components/CreatePlaylist";

const Playlist = () => {
  const { token, datas } = useAppSelector((state) => state.playlist);
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("twice");
  const { isSelected, handleSelect } = Select();

  useEffect(() => {
    console.log(query);
    console.log(token);
    const API_ENDPOINT = "https://api.spotify.com/v1/search";
    const TYPE = "track";
    const LIMIT = "20";
    const paramsData: { q: string; type: string; limit: string } = {
      q: query,
      type: TYPE,
      limit: LIMIT,
    };
    const params = new URLSearchParams(paramsData).toString();
    const url = `${API_ENDPOINT}?${params}`;
    const fetchOptions = getOptions(token);
    console.log(url);
    query
      ? fetch(url, fetchOptions)
          .then((res) => res.json())
          .then((json) => {
            console.log(json.tracks.items);
            dispatch(search(json.tracks.items));
          })
          .catch((error) => console.log(error))
      : dispatch(search(sample));
  }, [dispatch, query, token]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setQuery(e.target.query.value);
  };

  return (
    <Grid templateRows="100px 1fr">
      <GridItem rowSpan={1}>
        <Search handle={handleSubmit} />
      </GridItem>
      <GridItem rowSpan={1}>
        <Grid templateColumns="repeat(5, 1fr)" gap={6} m="20px">
          {datas.map((data: any) => (
            <Track
              url={data.album.images[1].url}
              name={data.name}
              artist={data.artists[0].name}
              album={data.album.name}
              key={data.uri}
              handle={() => handleSelect(data.uri)}
              select={isSelected(data.uri) ? "#0d0d0d" : "#1d1d1d"}
            ></Track>
          ))}
        </Grid>
      </GridItem>
      <CreatePlaylist />
    </Grid>
  );
};

export default Playlist;

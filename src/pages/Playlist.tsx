import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { search } from "../redux/playlistSlice";
import { Grid, GridItem } from "@chakra-ui/react";
import { getSearch } from "../assets/spotify";
import { Select } from "../components/Select";
import Search from "../components/Search";
import sample from "../assets/sample";
import Track from "../components/Track";
import CreatePlaylist from "../components/CreatePlaylist";
import UserProfile from "../components/UserProfile";

const Playlist = () => {
  const { token, datas, user } = useAppSelector((state) => state.playlist);
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");
  const { isSelected, handleSelect } = Select();

  useEffect(() => {
    query
      ? getSearch(token, query).then((res) =>
          dispatch(search(res.tracks.items))
        )
      : dispatch(search(sample));
  }, [dispatch, query, token]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setQuery(e.target.query.value);
  };

  return (
    <Grid templateRows="100px 1fr">
      <UserProfile name={user.display_name} url={user.images[0].url} />
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

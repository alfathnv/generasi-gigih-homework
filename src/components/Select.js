import { useSelector, useDispatch } from "react-redux";
import { addTrack, removeTrack } from "../redux/playlistSlice";
const Select = () => {
  const { tracks } = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  const isSelected = (id) => {
    return tracks.includes(id);
  };

  const handleSelect = (id) => {
    if (!isSelected(id)) {
      addSelect(id);
    } else {
      removeSelect(id);
    }
    console.log(tracks);
  };

  const addSelect = (id) => {
    dispatch(addTrack(id));
  };

  const removeSelect = (id) => {
    dispatch(removeTrack(id));
  };

  return { isSelected, handleSelect };
};

export { Select };

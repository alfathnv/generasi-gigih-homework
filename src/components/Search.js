import Button from './Button'
import Input from './Input'

const Search = ({ handle }) => {
    return (
        <div>
            <form onSubmit={handle}>
                <Input type="text" name="query" place="Search..." />
                <Button value="Login" />
            </form>
        </div>
    )
}

export default Search

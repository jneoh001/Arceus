const SearchPage2 = (props) => {
    const result = [];
    for (let i = 0; i < props.rating; i++) {
        result.push(<span>⭐</span>);
    }

    const card = {
        background: "aliceblue",
        border: "2px solid aqua",
        borderRadius: "25px",
        paddingLeft: "60px",
        marginBottom: "25px"
    }

    const margin = {
        marginLeft: "200px"
    }

    return (
        <div>
            <form>
                <span style={margin}>Search</span>
                <input onChange={handleChange} value={state.query} type="search" />

                <span style={margin}>Sort By</span>
                <select defaultValue={'title'} onChange={(e) => sortBy(e.target.value)}>
                    <option value="title" disabled>None</option>
                    <option value="title">Title</option>
                    <option value="description">Description</option>
                </select>

                <span style={margin}>Sort By</span>
                <select defaultValue={'DEFAULT'} onChange={(e) => updatePosts(e.target.value)}>
                    <option value="DEFAULT" disabled>None</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </form>
            <ul>
                {(
                    state.list.map(post => {
                        return <div key={post.title} style={card}>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                        </div>
                    })
                )}

                {state.list.length === 0 && <h2>Empty List !!!</h2>}

            </ul>
        </div>
    );
};

export default SearchPage2;
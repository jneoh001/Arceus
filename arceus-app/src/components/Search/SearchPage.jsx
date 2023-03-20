import { db } from "../../firebaseConfig";
import { get, child, ref } from "firebase/database";
import { useState, useEffect } from "react";

const SearchPage = (props) => {
    const [rating, setRating] = useState(0);
    const [ratingDisplay, setRatingDisplay] = useState([]);

    useEffect(() => {
        get(child(ref(db), "reviews/" + props.id + "/ratingDetails"))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setRating(Math.round(snapshot.val().total / snapshot.val().number));
                }
            })
            .catch((error) => {
                console.log(error.code);
            });
    }, []);

    useEffect(() => {
        const result = [];
        if (rating === 0) {
            for (let i = 0; i < 5; i++) {
                result.push(
                    <svg
                        key={i}
                        aria-hidden="true"
                        className="w-7 h-7 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                );
            }
            result.push(<span key={5}> (No Ratings)</span>);
        } else {
            for (let i = 0; i < rating; i++) {
                result.push(
                    <svg
                        key={i}
                        aria-hidden="true"
                        className="w-7 h-7 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                );
            }
            for (let i = rating; i < 5; i++) {
                result.push(
                    <svg
                        key={i}
                        aria-hidden="true"
                        className="w-7 h-7 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                );
            }
        }

        setRatingDisplay(result);
    }, [rating]);

    const card = {
        background: "aliceblue",
        border: "2px solid aqua",
        borderRadius: "25px",
        paddingLeft: "60px",
        marginBottom: "25px"
    };

    const margin = {
        marginLeft: "200px"
    };


    const posts = [
        { title: 'a', description: 'This is b' },
        { title: 'aa', description: 'This is bb' },
        { title: 'aaa', description: 'This is bbb' },
        { title: 'aaaa', description: 'This is bbbb' },
        { title: 'aaaaa', description: 'This is bbbbb' },
        { title: 'aaaaaa', description: 'This is bbbbbb' }
    ]

    // Store sortby order i.e. ascending or descending
    const [sortType, setSortType] = useState("ascending");

    // Sortby field i.e. title or description
    const [sortByField, setSortByField] = useState("title");

    // Store filter/latest posts
    const [result, setResult] = useState();

    const [state, setstate] = useState({
        query: '',
        list: posts
    })

    // Filter posts on typing in search input
    const handleChange = (e) => {
        const results = posts.filter(post => {
            if (e.target.value === "") return posts;
            return post[sortByField].toLowerCase().includes(e.target.value.toLowerCase())
        })

        setResult(results);

        setstate({
            query: e.target.value,
            list: sortFunc(results, sortType, sortByField)
        })
    }

    // Sort posts depending on sort type and available results
    function sortFunc(results, sortType, sortByField) {
        if (sortType === "ascending") {
            results.sort((a, b) => a[sortByField] < b[sortByField] ? -1 : 1)
        }
        else if (sortType === "descending") {
            results.sort((a, b) => b[sortByField] > a[sortByField] ? 1 : -1)
        }
        return results;
    }

    // Dropdown to sort posts in ascending or descending order depending on title.
    function updatePosts(e) {
        setSortType(e);
        setstate({
            query: state.query,
            list: !result ? sortFunc(posts, e, sortByField) : sortFunc(result, e, sortByField)
        })
    }

    // Dropdown to sort posts in ascending or descending order depending on title.
    function sortBy(e) {
        setSortByField(e);
        setstate({
            query: state.query,
            list: !result ? sortFunc(posts, sortType, e) : sortFunc(result, sortType, e)
        })
    }

    return (

        <>
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
            <a
                href="#"
                className="flex flex-row min-w-[900px]  max-w-[900px] items-center border rounded-lg shadow hover:bg-gray-100 border-gray-700 bg-gray-800 hover:bg-gray-700 mb-12"
            >
                <img
                    className="object-cover max-h-60 max-w-sm rounded-t-lg h-auto w-1/2 md:rounded-none md:rounded-l-lg"
                    src={props.img}
                    alt={props.name} />
                <div className="flex flex-col justify-around ml-12">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {props.name}
                    </h5>
                    <p className=" flex mb-3 text-xl text-gray-700 dark:text-gray-400">
                        {ratingDisplay}
                    </p>
                    <div className="grid grid-cols-2">
                        <p className="mb-2 text-lg text-gray-700 dark:text-gray-400">
                            Carbohydrates: {props.carbs}g
                        </p>
                        <p className="ml-4 mb-2 text-lg text-gray-700 dark:text-gray-400">
                            Protein: {props.protein}g
                        </p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p className="mb-2 text-lg text-gray-700 dark:text-gray-400">
                            Fats: {props.fats}g
                        </p>
                        <p className="ml-4 mb-2 text-lg text-gray-700 dark:text-gray-400">
                            Calories: {props.calories}g
                        </p>
                    </div>
                </div>{" "}
                {/* <FavouriteButton id={props.id} /> */}
            </a></>
    );
};

export default SearchPage;

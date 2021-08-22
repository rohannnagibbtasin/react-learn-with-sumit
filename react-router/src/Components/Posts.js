export default function Posts({ match }) {
    const { params } = match;
    return <div>This is the post page - {params.category}</div>;
}

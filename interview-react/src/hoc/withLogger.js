export default function withLogger(Component) {
    return function WithLogger(props) {
        console.log(`Component name: ${Component?.name}`);
        return <Component {...props} />
    }
}
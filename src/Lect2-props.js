export default function PassProps({ buttonName, headerContent }) {
    return (
        <div>
            <button>{buttonName}</button>
            <h4>{ headerContent}</h4>
        </div>
    );
}
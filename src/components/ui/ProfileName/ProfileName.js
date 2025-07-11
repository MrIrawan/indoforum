export default function UserProfileName({ userName = "" }) {
    return (
        <h2 className="text-2xl font-m-bold capitalize">{ userName ? userName : "User did not write name" }</h2>
    )
}
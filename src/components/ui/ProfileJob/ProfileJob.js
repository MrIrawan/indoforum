export default function UserProfileJob({ userJob = "" }) {
    return (
        <p className="text-sm font-m-medium text-black">{userJob ? userJob : "User did not write job"}</p>
    )
}
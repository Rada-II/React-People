function UserCard({ user }) {
  let email = user.email.split("@")[0];
  let domain = user.email.split("@")[1];
  return (
    <div
      className="user-grid-item"
      style={{
        backgroundColor: user.gender === "female" ? "#ffebee" : "#ffffff",
      }}
    >
      <div className="user-profile">
        <img src={user.picture.large} alt={user.name.first} />
        <p className="user-name">{user.name.first.toLowerCase()}</p>
      </div>
      <div className="user-grid-details">
        <p>
          {email.substring(0, 3) + "..." + email.slice(-3)}.{domain}
        </p>
        <p>
          Birth date:{" "}
          {new Date(user.dob.date)
            .toLocaleDateString("sr-RS", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
            .replaceAll(" ", "")}
        </p>
      </div>
    </div>
  );
}

export default UserCard;

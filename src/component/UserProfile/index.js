import "./index.css"

const UserProfile = (props) => {
  const { userDetails, deleteUser } = props
  const { imgUrl, name, role, uniqueNo } = userDetails
  const onDelete = () => {
   deleteUser(uniqueNo)
  }
  return (
    <li className="user-container">
      <img alt="avatar" className="profile-image" src={imgUrl} />
      <div className="details-container">
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
      <button type="button" onClick={onDelete} className="delete-button">
        <img
          className="delete-img"
          alt="delete-img"
          src="https://iconsplace.com/wp-content/uploads/_icons/800080/256/png/letter-x-icon-13-256.png"
        />
      </button>
    </li>
  )
}

export default UserProfile

import IconConfig from "../../../../icons/iconConfig";
import IconLogout from "../../../../icons/iconLogout";
import IconNotification from "../../../../icons/iconNotification";
import styles from "../../dashboard.module.css";
import IconButton from "./iconButton";

const Header = () => {
  return (
    <header className={styles.header + " h-20 border-b border-neutral-200 flex justify-between items-center px-6"}>
      <div>Search</div>
      <div className="flex gap-4">
        <IconButton icon={<IconConfig />} />
        <IconButton icon={<IconNotification />} />
        <IconButton icon={<IconLogout />} />
      </div>
    </header>
  )
}

export default Header
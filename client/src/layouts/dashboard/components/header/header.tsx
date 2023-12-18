import IconConfig from "../../../../icons/iconConfig";
import IconLogout from "../../../../icons/iconLogout";
import IconNotification from "../../../../icons/iconNotification";
import styles from "../../dashboard.module.css";
import IconButton from "./iconButton";
import Search from "./search";

const Header = () => {
  return (
    <header className={styles.header + " h-20 border-b flex justify-between items-center px-10"}>
      <Search />
      <div className="flex gap-4">
        <IconButton icon={<IconConfig />} />
        <IconButton icon={<IconNotification />} />
        <IconButton icon={<IconLogout />} />
      </div>
    </header>
  )
}

export default Header
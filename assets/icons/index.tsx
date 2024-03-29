import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

/**
 *
 * @returns
 * AntDesignIcon
 */

export const UploadIcon = () => (
  <Icon name="up-square-o" size={20} color="white" />
);
export const CheckIcon = () => <Icon name="check" size={16} color="white" />;

export const CloseIcon = () => <Icon name="close" size={20} color={'white'} />;

/**
 *
 * @returns
 * IonicIcon
 */

export const NotificationIcon = () => (
  <IonicIcon name="notifications-outline" size={20} color={'white'} />
);
export const SearchIcon = () => (
  <IonicIcon name="search-outline" size={20} color={'white'} />
);

export const RightArrow = () => (
  <IonicIcon name="chevron-forward" size={16} color={'#5D5D5D'} />
);

export const LeftArrow = () => (
  <IonicIcon name="chevron-back-outline" size={16} color={'#5D5D5D'} />
);

export const BackHandler = () => (
  <IonicIcon name="chevron-back-outline" size={24} color={'white'} />
);

/**
 *
 * @returns
 * MaterialIcon
 */

export const HomeTabIcon = () => (
  <MaterialIcon name="home-variant" size={20} color="white" />
);

export const GenderIcon = ({gender}: {gender: boolean}) => (
  <MaterialIcon
    name={gender ? 'gender-female' : 'gender-male'}
    size={16}
    color={gender ? 'red' : '#397DFF'}
  />
);

/**
 *
 * @returns
 *ImageIcon
 */

export const LogoImage = () => (
  <Image
    source={require('../images/logo.png')}
    style={{width: 100, height: 100}}
  />
);

export const PlusIcon = () => (
  <Icon name="pluscircleo" size={20} color="white" />
);

export const SettingIcon = () => (
  <Image
    source={require('../images/setting.png')}
    style={{width: 20, height: 20}}
  />
);

export const ListIcon = () => (
  <Image
    source={require('../images/list.png')}
    style={{width: 20, height: 20}}
  />
);

import GithubItem from './GithubItem';
import StackoverflowItem from './StackoverflowItem/index';
import CnodejsItem from './CnodejsItem';

const DISTRIBUTE_SEARCH_ITEMS = {
  github: GithubItem,
  stackoverflow: StackoverflowItem,
  cnodejs: CnodejsItem
};

export default DISTRIBUTE_SEARCH_ITEMS;

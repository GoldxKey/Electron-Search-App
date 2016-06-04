import GithubItem from './GithubItem';
import StackoverflowItem from './StackoverflowItem/index';
import CnodejsItem from './CnodejsItem';
import SegmentfaultItem from './SegmentfaultItem';

const DISTRIBUTE_SEARCH_ITEMS = {
  github: GithubItem,
  stackoverflow: StackoverflowItem,
  cnodejs: CnodejsItem,
  segmentfault: SegmentfaultItem
};

export default DISTRIBUTE_SEARCH_ITEMS;

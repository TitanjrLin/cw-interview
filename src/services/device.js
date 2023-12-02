import _ from 'lodash';
import { bpts } from '../components/styled/RWDStyle';
import store from '../store';
import systemAction from '../store/reducers/system/actions';

const onResize = () => {
  const media = `(max-width: ${bpts.medium})`;
  const isMobile = window.matchMedia(media).matches;
  store.dispatch(systemAction.setIsMobile(isMobile));
};

const debounceResize = _.debounce(onResize, 100);

const observer = new ResizeObserver(debounceResize);
observer.observe(document.body);

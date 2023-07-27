import { IconProps, mkIcon } from './IconUtils';

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default ( props: IconProps ) => {
    return mkIcon(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd"/>
</svg>

        , props );
};
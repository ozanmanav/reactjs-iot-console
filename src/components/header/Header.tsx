import React, { FunctionComponent, HTMLAttributes } from 'react';
import './Header.scss';
import { Logo, CustomNavLink } from '../ui';
import classNames from 'classnames';
import { NavLinkProps, RouteComponentProps, withRouter } from 'react-router-dom';

const HeaderLogo: FunctionComponent<HTMLAttributes<HTMLAnchorElement> & NavLinkProps> = ({ className, to }) => {
    return (
        <CustomNavLink to={to} className={classNames('b-header__link flex', className)}>
            <Logo className="b-header__logo" />
        </CustomNavLink>
    );
};

// export const LandingHeader: FunctionComponent = () => {
//     return (
//         <header className="flex justify-between align-center b-header">
//             <nav className="flex align-center b-header__main-nav">
//                 <HeaderLogo to="/" />
//                 <CustomNavLink to="/info1" className="b-header__link" navLink>
//                     Information 1
//                 </CustomNavLink>
//                 <CustomNavLink to="/info2" className="b-header__link" navLink>
//                     Information 2
//                 </CustomNavLink>
//             </nav>
//             <User />
//         </header>
//     );
// };

export const LoginHeader: FunctionComponent = () => {
    return (
        <header className="flex justify-end align-center b-header _login">
            <HeaderLogo className="b-header__logo-fixed" to="/" />
        </header>
    );
};

// const AppHeaderUserNav: FunctionComponent = () => {
//     const { open, hide, isOpen } = useModal();
//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const linkContainerClassname = classNames(["b-header__link-container", { _toggled: isMobileMenuOpen }]);

//     function toggleMobileMenu() {
//         setMobileMenuOpen((prevIsMobileMenuOpen) => !prevIsMobileMenuOpen);
//     }

//     return (
//         <>
//             <nav className="flex align-center b-header__main-nav">
//                 <HeaderLogo to="/app/cockpit" />
//                 <div className={linkContainerClassname}>
//                     <div className="b-header__link-container__inline-links">
//                         <CustomNavLink to="/app/cockpit" className="b-header__link" navLink>
//                             Cockpit
//                         </CustomNavLink>
//                         <UserRoleCheck
//                             availableForRoles={[
//                                 "owner_administrator",
//                                 "manufacturer_administrator",
//                                 "manufacturer_brand_manager",
//                                 "property_manager_administrator",
//                                 "service_provider_administrator",
//                             ]}
//                         >
//                             <CustomNavLink to="/app/building/add" className="b-header__link" navLink>
//                                 Add Building
//                             </CustomNavLink>
//                         </UserRoleCheck>
//                         <UserRoleCheck
//                             availableForRoles={[
//                                 "owner_administrator",
//                                 "manufacturer_administrator",
//                                 "manufacturer_brand_manager",
//                                 "property_manager_administrator",
//                                 "service_provider_administrator",
//                                 "property_manager_building_manager",
//                             ]}
//                         >
//                             <button className="link b-header__link _font-bold" onClick={open}>
//                                 Add Organization
//                             </button>
//                         </UserRoleCheck>
//                         <CustomNavLink to="/app/settings" className="b-header__link" navLink>
//                             Settings
//                         </CustomNavLink>
//                         <UserRoleCheck availableForRoles={[]} availableForAdminRoles={["admin", "master", "datamanager"]}>
//                             <CustomNavLink to="/app/admin" className="b-header__link" navLink>
//                                 Admin Panel
//                             </CustomNavLink>
//                         </UserRoleCheck>
//                     </div>
//                     <button className="b-header__link-container__toggle-icon _cursor-pointer" onClick={toggleMobileMenu}>
//                         <Icon icon={isMobileMenuOpen ? "collapse" : "nextArrow"} />
//                     </button>
//                 </div>
//             </nav>
//             <OrganizationModal hide={hide} isOpen={isOpen} />
//         </>
//     );
// };

// const AppHeaderAdminNav: FunctionComponent = () => {
//     return (
//         <nav className="flex align-center b-header__main-nav">
//             <HeaderLogo to="/app/cockpit" />
//             <CustomNavLink to="/app/admin/companies" className="b-header__link flex align-center" navLink>
//                 <CompaniesIcon /> Companies
//             </CustomNavLink>
//             <CustomNavLink to="/app/admin/types-control" className="b-header__link flex align-center" navLink>
//                 <TypesIcon /> Types Control
//             </CustomNavLink>
//             <CustomNavLink to="/app/admin/organizations" className="b-header__link flex align-center" navLink>
//                 <OrganizationsIcon /> Organizations
//             </CustomNavLink>
//             <CustomNavLink to="/app/admin/settings" className="b-header__link flex align-center" navLink>
//                 <SettingsIcon /> Settings
//             </CustomNavLink>
//         </nav>
//     );
// };

// const AppHeaderBase: FunctionComponent<RouteComponentProps> = ({ location }) => {
//     const isAdmin = location.pathname.includes("app/admin");

//     return (
//         <header className="flex justify-between align-center b-header _app">
//             {isAdmin ? <AppHeaderAdminNav /> : <AppHeaderUserNav />}
//             <User />
//         </header>
//     );
// };

// export const AppHeader = withRouter(AppHeaderBase);

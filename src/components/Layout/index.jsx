import './index.scss';

function Layout({ children }) {
    return (
        <div className="layout">
            <div className="layout__nav" />
            <div className="layout__content">
                <div className="layout__c">
                    <div className="layout__e" />
                </div>
                <div className="layout__children">
                    {children}
                </div>
            </div>
            <div className="layout__footer" />
        </div>
    );
}

export default Layout;

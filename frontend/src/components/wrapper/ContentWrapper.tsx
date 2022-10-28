import React, {ReactNode} from 'react';

const ContentWrapper: React.FC<{children:ReactNode}> = ({children}) => {
    return (
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
                {children}
            </div>
        </div>
    );
};

export default ContentWrapper;
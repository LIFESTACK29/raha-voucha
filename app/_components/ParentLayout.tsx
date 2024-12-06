import React, { ReactNode } from 'react';

const ParentLayout = ({ children }: { children: ReactNode }) => {
    return <div className="w-[90%] mx-auto max-w-[1600px]">{children}</div>;
};

export default ParentLayout;

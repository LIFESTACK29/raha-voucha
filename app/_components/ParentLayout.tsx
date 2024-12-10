import React, { ReactNode } from 'react';

const ParentLayout = ({ children }: { children: ReactNode }) => {
    return <main className="w-[90%] mx-auto max-w-[1600px]">{children}</main>;
};

export default ParentLayout;

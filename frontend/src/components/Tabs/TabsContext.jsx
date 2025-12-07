//Lưu giữ thông tin chung của tabs

import React, {createContext, useState, useContext} from "react";

const TabsContext = createContext({});

export const TabsProvider = ({children, defaultIndex = 0}) => {
    //Mặc định chọn Tabs đầu tiên
    const [activeTab, setActiveTab] = useState(defaultIndex);

    return (
        <TabsContext.Provider value={{activeTab, setActiveTab}}>
            {children}
        </TabsContext.Provider>
    );
}

//Để nó chỉ useContext 1 lần thôi, các lần sau dùng useTabs là được với điều kiện là được bọc trong Provider
export const useTabs = () => {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error('useTabs must be used within a TabsProvider');
    }
    return context;
}
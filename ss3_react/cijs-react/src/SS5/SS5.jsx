// import React, { useState } from 'react'
// import { Button, Menu, Popconfirm, Space, Upload } from 'antd';
// import { AppstoreOutlined, MailOutlined, SettingOutlined, UploadOutlined } from '@ant-design/icons';

// const items = [
//     {
//         label: 'Navigation One',
//         key: 'mail',
//         icon: <MailOutlined />,
//     },
//     {
//         label: 'Navigation Two',
//         key: 'app',
//         icon: <AppstoreOutlined />,
//         disabled: true,
//     },
//     {
//         label: 'Navigation Three - Submenu',
//         key: 'SubMenu',
//         icon: <SettingOutlined />,
//         children: [
//             {
//                 type: 'group',
//                 label: 'Item 1',
//                 children: [
//                     { label: 'Option 1', key: 'setting:1' },
//                     { label: 'Option 2', key: 'setting:2' },
//                 ],
//             },
//             {
//                 type: 'group',
//                 label: 'Item 2',
//                 children: [
//                     { label: 'Option 3', key: 'setting:3' },
//                     { label: 'Option 4', key: 'setting:4' },
//                 ],
//             },
//         ],
//     },
//     {
//         key: 'alipay',
//         label: (
//             <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//                 Navigation Four - Link
//             </a>
//         ),
//     },
// ];

// function SS5() {
//     const [current, setCurrent] = useState('mail');
//     const onClick = e => {
//         console.log('click ', e);
//         setCurrent(e.key);
//     };

//     return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
// }

// export default SS5


import React from 'react'

function SS5() {
    return (
        <h1 className="text-3xl font-bold underline bg-amber-400 text-amber-100">
            Hello world!
        </h1>
    )
}

export default SS5
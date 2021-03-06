import React, {Component} from 'react';
import {Button, message, Popconfirm} from "antd";
import request from "../../common/request";

class Logout extends Component {

    confirm = async (e) => {
        let result = await request.post('/logout');
        if (result['code'] !== 1) {
            message.error(result['message']);
        } else {
            message.success('退出登录成功，即将跳转至登录页面。');
            window.location.reload();
        }
    }

    render() {
        return (
            <div>
                <Popconfirm
                    title="您确定要退出登录吗?"
                    onConfirm={this.confirm}
                    okText="确定"
                    cancelText="取消"
                    placement="left"
                >
                    <Button key="login-btn" type="dashed">
                        退出登录
                    </Button>,
                </Popconfirm>

            </div>
        );
    }
}

export default Logout;
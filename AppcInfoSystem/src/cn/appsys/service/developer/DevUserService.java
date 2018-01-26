package cn.appsys.service.developer;

import cn.appsys.pojo.DevUser;

/**
 * 开发者用户业务层接口
 * @author Administrator
 *
 */
public interface DevUserService {
	DevUser login(String devCode,String devPassword)throws Exception;
}

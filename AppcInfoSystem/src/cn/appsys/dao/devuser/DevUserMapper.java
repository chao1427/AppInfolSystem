package cn.appsys.dao.devuser;

import org.apache.ibatis.annotations.Param;

import cn.appsys.pojo.DevUser;

/**
 * 开发者用户映射接口
 * @author Administrator
 *
 */
public interface DevUserMapper {
	/**
	 * 根据用户编码获取信息
	 * @param devCode
	 * @return
	 */
	DevUser getLoginUser(@Param("devCode")String devCode)throws Exception;
}

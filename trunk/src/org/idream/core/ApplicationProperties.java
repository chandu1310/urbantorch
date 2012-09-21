package org.idream.core;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;
import java.util.logging.Logger;


public class ApplicationProperties {
	private final static Logger LOGGER = Logger.getLogger(ApplicationProperties.class.getName());
	
	private static ApplicationProperties classInstance = null;
	private Properties props;
	
	private ApplicationProperties() {
		props = new Properties();
		try{
			LOGGER.info("Intiatilizing application with properties file: application.properties");
			File f = new File("application.properties");
			FileInputStream fis = new FileInputStream(f);
			props.load(fis);
			LOGGER.info("Successfully loaded properties file : application.properties");
		}catch (Exception e) {
			LOGGER.severe("Failed to initialize with properties file: application.properties. Application configaration failed!");
		}
	}
	
	public static ApplicationProperties getInstance() {
		if(classInstance == null )
			classInstance = new ApplicationProperties();
		return classInstance;
	}
	
	public String getProperty(String key){
		String value;
		value = props.getProperty(key);
		return value;
	}
	
	public static void main(String[] args) {		
		try {
			ApplicationProperties test = ApplicationProperties.getInstance();
			System.out.println(test.getProperty("dbserver"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}

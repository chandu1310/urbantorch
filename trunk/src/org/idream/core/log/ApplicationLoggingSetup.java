package org.idream.core.log;

import java.io.IOException;
import java.util.logging.FileHandler;
import java.util.logging.Formatter;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ApplicationLoggingSetup {
	static private FileHandler fileHTML;
	static private Formatter formatterHTML;

	public static void setup() throws IOException 
	{
		// Create Logger
		Logger logger = Logger.getLogger("");
		logger.setLevel(Level.SEVERE);
		fileHTML = new FileHandler("application_log.html");

		// Create HTML Formatter
		formatterHTML = new LogHTMLFormatter();
		fileHTML.setFormatter(formatterHTML);
		logger.addHandler(fileHTML);
	}
}

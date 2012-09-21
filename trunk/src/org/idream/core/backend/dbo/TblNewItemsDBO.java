package org.idream.core.backend.dbo;

import java.util.Date;

public class TblNewItemsDBO {
	private int id;
	private Date origination_date;
	private Date publishing_date;
	private String category;
	private String headline;
	private String sub_headline;
	private String source;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Date getOrigination_date() {
		return origination_date;
	}
	public void setOrigination_date(Date origination_date) {
		this.origination_date = origination_date;
	}
	public Date getPublishing_date() {
		return publishing_date;
	}
	public void setPublishing_date(Date publishing_date) {
		this.publishing_date = publishing_date;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getHeadline() {
		return headline;
	}
	public void setHeadline(String headline) {
		this.headline = headline;
	}
	public String getSub_headline() {
		return sub_headline;
	}
	public void setSub_headline(String sub_headline) {
		this.sub_headline = sub_headline;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}	
}

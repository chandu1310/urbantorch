package org.idream.core.backend.dbo;

public class TblNewsContentDBO {
	private int id;
	private String content;
	private int attachments_count;
	private byte[] attachments;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public int getAttachments_count() {
		return attachments_count;
	}
	public void setAttachments_count(int attachments_count) {
		this.attachments_count = attachments_count;
	}
	public byte[] getAttachments() {
		return attachments;
	}
	public void setAttachments(byte[] attachments) {
		this.attachments = attachments;
	}	
}

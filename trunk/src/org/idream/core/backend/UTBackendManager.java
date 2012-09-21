package org.idream.core.backend;

import java.util.ArrayList;

import org.idream.core.backend.dbo.TblNewItemsDBO;
import org.idream.core.backend.dbo.TblNewsContentDBO;

public class UTBackendManager {
	private  UTBackendManager classInstance = null;
	
	private UTBackendManager(){		
		
	}
	
	public UTBackendManager getInstance() {
		if(classInstance == null )
			classInstance = new UTBackendManager();
		return classInstance;
	}
	
	public ArrayList<TblNewItemsDBO> getNewsItems(int[] newsItemIds){
		ArrayList<TblNewItemsDBO> newsItems = new ArrayList<TblNewItemsDBO>();
		return newsItems;
	}
	
	public TblNewsContentDBO getNewsContent(int newsItemId) {
		TblNewsContentDBO contentDBO = new TblNewsContentDBO();
		return contentDBO;
	}
	
	public int[] searchNewsWithTags(){
		int[] newsItemIds = new int[3];
		return newsItemIds;
	}
}

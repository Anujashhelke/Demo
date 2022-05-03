package bddframePageobject;

import bddFrameReusable.WebDriverHelper;
import bddFrameUistore.FooterUi;

public class Footer {
	WebDriverHelper helper;
	public Footer() {
		helper=new WebDriverHelper();
	}

	public void clickOnLink() {
		helper.explictlyWaitOfVisibilityOfElementLocatedBy(FooterUi.link, 50);
		helper.click(FooterUi.link);
	}

	public void getTitle() {
		// TODO Auto-generated method stub
		
	}

	public void verifyText() {
		// TODO Auto-generated method stub
		
	}

	public void close() {
		
		
	}

}

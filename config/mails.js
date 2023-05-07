const InvitationEmail = (image, titleOne, titleTwo, titleThree, enlaceWeb, trackingCode, networking) => {
    return `
    <!-- Notification 3  -->
<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full"  bgcolor="#e3e6ed"style="background-color: rgb(242, 244, 249);">
	<tr>
		<td align="center" style="background-image: url('images/not3_bg_image.jpg'); -webkit-background-size: cover; background-size: cover; background-color: rgb(242, 244, 249); background-position: center center; background-repeat: no-repeat;" id="not3ChangeBG">
		
			
			<!-- Mobile Wrapper -->
			<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile">
				<tr>
					<td width="100%" height="100" align="center">
						
						<!-- SORTABLE -->
						<div class="sortable_inner ui-sortable">
												
						<!-- Space -->
						<table width="400" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
							<tr>
								<td width="100%" height="50"></td>
							</tr>
						</table><!-- End Space -->
						
						<!-- Space -->
						<table width="400" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
							<tr>
								<td width="100%" height="50"></td>
							</tr>
						</table><!-- End Space -->
						
						<!-- Shadow -->
						<table width="400" border="0" cellpadding="0" cellspacing="0" align="center" class="full" style="-webkit-border-radius: 6px; -moz-border-radius: 6px; border-radius: 6px;">
							<tr>
								<td width="100%" style="border-top-left-radius: 6px; border-top-right-radius: 6px; border-bottom-right-radius: 6px; border-bottom-left-radius: 6px; -webkit-box-shadow: rgba(0, 0, 0, 0.74902) 0px 0px 6px 0px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 6px 0px; background-color: rgb(255, 255, 255);" bgcolor="#ffffff">
												
									<!-- Start Top -->
									<table width="400" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" bgcolor="#00d2c2"object="drag-module-small" style="border-top-right-radius: 6px; border-top-left-radius: 6px; background-color: rgb(0, 210, 194);">
										<tr>
											<td width="100%" valign="middle" align="center">
												
												<!-- Header Text --> 
												<table width="300" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
													<tr>
														<td width="100%" height="35"></td>
													</tr>
													<tr>
														<td valign="middle" width="100%" style="text-align: center; font-family: 'Open Sans', Helvetica, Arial, sans-serif; font-size: 27px; color: rgb(255, 255, 255); line-height: 35px; font-weight: 400;" class="fullCenter" >
															${titleOne}
														</td>
													</tr>
													<tr>
														<td width="100%" height="35" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
													</tr>
												</table>
												
											</td>
										</tr>
									</table>
									
									<table width="400" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgb(255, 255, 255);">
										<tr>
											<td width="100%" valign="middle" align="center">
												
												<!-- Header Text --> 
												<table width="350" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
													<tr>
														<td width="100%" height="40"></td>
													</tr>
													<tr>
														<td width="100" height="35" align="center"  class="image113">
                                                                <a href="#">
                                                                    </a><a href="#" style="text-decoration: none;"><img src="${image}" width="113" alt="imágen de usuario" border="0" ></a>
                                                                
                                                        </td>
													</tr>
													<tr>
														<td width="100%" height="8" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
													</tr>
													<tr>
														<td valign="middle" width="100%" style="text-align: center; font-family: 'Open Sans', Helvetica, Arial, sans-serif; font-size: 14px; color: rgb(142, 145, 151); line-height: 24px; font-weight: 400;" class="fullCenter" >
															${titleTwo}
														</td>
													</tr>
													<tr>
														<td width="100%" height="35" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
													</tr>
												</table>
																				
											</td>
										</tr>
									</table><!-- End Second -->
									
									<table width="400" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgb(255, 255, 255);">
										<tr>
											<td width="352" valign="middle" align="center">
											
												<table width="265" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
													<tr>
														<td valign="middle" width="100%" class="icon18" align="center">
															
															<!-- Input 2 -->
															<table width="220" border="0" cellpadding="0" cellspacing="0" align="center" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; border: 1px solid #ebeef5;" class="fullCenter">
																<tr>
																	<td width="151" height="44" style="text-align: center; font-family: 'Open Sans', Helvetica, Arial, sans-serif; font-size: 15px; color: #00d2c2; line-height: 22px; font-weight: 700;"  >${trackingCode}</td>
																</tr>
															</table><!-- End Space -->
															
														</td>
													</tr>
													<tr>
														<td width="100%" height="15" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
													</tr>
												</table>
											</td>
										</tr>
									</table>
									
									<table width="400" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgb(255, 255, 255);">
										<tr>
											<td width="100%" valign="middle" align="center">
												
												<!-- Text --> 
												<table width="330" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
													<tr>
														<td width="100%" height="15" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
													</tr>
													<tr>
														<td valign="middle" width="100%" style="text-align: center; font-family: 'Open Sans', Helvetica, Arial, sans-serif; font-size: 14px; color: rgb(142, 145, 151); line-height: 24px; font-weight: 400;" class="fullCenter" >
															${titleThree} 
														</td>
													</tr>
												</table>
												
											</td>
										</tr>
									</table>
									
									<table width="400" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgb(255, 255, 255);">
										<tr>
											<td width="100%" valign="middle" align="center">
											
												<table width="330" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
													<tr>
														<td width="100%" height="30" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
													</tr>
													<tr>
														<td width="100%" align="center">
			
															<!-- SORTABLE -->
															<div class="sortable_inner ui-sortable">
															<table border="0" cellpadding="0" cellspacing="0" align="center" class="buttonScale">
																<tr>
																	<td align="center" height="36" bgcolor="#3f4345"style="border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; padding-left: 20px; padding-right: 20px; font-family: 'Open Sans', Helvetica, Arial, sans-serif; color: rgb(255, 255, 255); font-size: 13px; font-weight: 700; line-height: 1px; background-color: rgb(63, 67, 69);">
			 
																		<a href=${enlaceWeb}  style="color: rgb(255, 255, 255); text-decoration: none; width: 100%; height: 100%;">Unirse a la empresa</a>
																		
																	</td>
																</tr>
															</table>
															</div>
			
														</td>
													</tr>
												</table>
												
											</td>
										</tr>
									</table>
									
									<table width="400" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgb(255, 255, 255);">
										<tr>
											<td width="100%" valign="middle" align="center">
											
												<table width="330" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
													<tr>
														<td width="100%" height="25" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
													</tr>
												</table>
												
											</td>
										</tr>
									</table>
									
									<table width="400" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" bgcolor="#ffffff"object="drag-module-small" style="border-bottom-right-radius: 6px; border-bottom-left-radius: 6px; background-color: rgb(255, 255, 255);">
										<tr>
											<td width="100%" valign="middle" align="center">
											
												<table width="330" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
													<tr>
														<td width="100%" height="40" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
													</tr>
												</table>
																				
											</td>
										</tr>
									</table>
						
								</td>
							</tr>
						</table><!-- End Shadow -->
						
						
						
						</div>
			
					</td>
				</tr>
			</table>
			
		</div>
		</td>
	</tr>
</table><!-- End Notification 3 -->
    `
}

module.exports = { InvitationEmail }
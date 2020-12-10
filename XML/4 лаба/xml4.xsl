<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<table align='center' >
<tr bgcolor="grey">
<td>ФИО</td>
<td>Средний балл</td>
<td>Год рождения</td>
</tr>
<xsl:for-each select="UNIVERSITY/GROUP">
<xsl:sort select="YEAR"/>
<tr bgcolor="grey">
<xsl:choose>
<xsl:when test="PASSING = 6"> 
<td bgcolor="green">
<xsl:value-of select="NAME"/>
</td>
</xsl:when>
<xsl:when test="PASSING &lt; 6">
<td bgcolor="red">
<xsl:value-of select="NAME"/>
</td>
</xsl:when>
<xsl:otherwise>
<td>
<xsl:value-of select="NAME"/>
</td>
</xsl:otherwise>
</xsl:choose>
<td>
<xsl:value-of select="PASSING"/>
</td>
<td>
<xsl:value-of select="YEAR"/>
</td>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

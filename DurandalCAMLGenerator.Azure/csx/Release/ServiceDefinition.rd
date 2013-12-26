<?xml version="1.0" encoding="utf-8"?>
<serviceModel xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" name="DurandalCAMLGenerator.Azure" generation="1" functional="0" release="0" Id="2a5c8117-174c-4b35-ba90-97f33f8beb0f" dslVersion="1.2.0.0" xmlns="http://schemas.microsoft.com/dsltools/RDSM">
  <groups>
    <group name="DurandalCAMLGenerator.AzureGroup" generation="1" functional="0" release="0">
      <componentports>
        <inPort name="DurandalCAMLGenerator:Endpoint1" protocol="http">
          <inToChannel>
            <lBChannelMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/LB:DurandalCAMLGenerator:Endpoint1" />
          </inToChannel>
        </inPort>
        <inPort name="DurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput" protocol="tcp">
          <inToChannel>
            <lBChannelMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/LB:DurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput" />
          </inToChannel>
        </inPort>
      </componentports>
      <settings>
        <aCS name="Certificate|DurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" defaultValue="">
          <maps>
            <mapMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/MapCertificate|DurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" />
          </maps>
        </aCS>
        <aCS name="DurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="">
          <maps>
            <mapMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/MapDurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </maps>
        </aCS>
        <aCS name="DurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountEncryptedPassword" defaultValue="">
          <maps>
            <mapMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/MapDurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountEncryptedPassword" />
          </maps>
        </aCS>
        <aCS name="DurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountExpiration" defaultValue="">
          <maps>
            <mapMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/MapDurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountExpiration" />
          </maps>
        </aCS>
        <aCS name="DurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountUsername" defaultValue="">
          <maps>
            <mapMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/MapDurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountUsername" />
          </maps>
        </aCS>
        <aCS name="DurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteAccess.Enabled" defaultValue="">
          <maps>
            <mapMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/MapDurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteAccess.Enabled" />
          </maps>
        </aCS>
        <aCS name="DurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteForwarder.Enabled" defaultValue="">
          <maps>
            <mapMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/MapDurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteForwarder.Enabled" />
          </maps>
        </aCS>
        <aCS name="DurandalCAMLGeneratorInstances" defaultValue="[1,1,1]">
          <maps>
            <mapMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/MapDurandalCAMLGeneratorInstances" />
          </maps>
        </aCS>
      </settings>
      <channels>
        <lBChannel name="LB:DurandalCAMLGenerator:Endpoint1">
          <toPorts>
            <inPortMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/DurandalCAMLGenerator/Endpoint1" />
          </toPorts>
        </lBChannel>
        <lBChannel name="LB:DurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput">
          <toPorts>
            <inPortMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/DurandalCAMLGenerator/Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput" />
          </toPorts>
        </lBChannel>
        <sFSwitchChannel name="SW:DurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp">
          <toPorts>
            <inPortMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/DurandalCAMLGenerator/Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp" />
          </toPorts>
        </sFSwitchChannel>
      </channels>
      <maps>
        <map name="MapCertificate|DurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" kind="Identity">
          <certificate>
            <certificateMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/DurandalCAMLGenerator/Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" />
          </certificate>
        </map>
        <map name="MapDurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" kind="Identity">
          <setting>
            <aCSMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/DurandalCAMLGenerator/Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </setting>
        </map>
        <map name="MapDurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountEncryptedPassword" kind="Identity">
          <setting>
            <aCSMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/DurandalCAMLGenerator/Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountEncryptedPassword" />
          </setting>
        </map>
        <map name="MapDurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountExpiration" kind="Identity">
          <setting>
            <aCSMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/DurandalCAMLGenerator/Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountExpiration" />
          </setting>
        </map>
        <map name="MapDurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountUsername" kind="Identity">
          <setting>
            <aCSMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/DurandalCAMLGenerator/Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountUsername" />
          </setting>
        </map>
        <map name="MapDurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteAccess.Enabled" kind="Identity">
          <setting>
            <aCSMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/DurandalCAMLGenerator/Microsoft.WindowsAzure.Plugins.RemoteAccess.Enabled" />
          </setting>
        </map>
        <map name="MapDurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteForwarder.Enabled" kind="Identity">
          <setting>
            <aCSMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/DurandalCAMLGenerator/Microsoft.WindowsAzure.Plugins.RemoteForwarder.Enabled" />
          </setting>
        </map>
        <map name="MapDurandalCAMLGeneratorInstances" kind="Identity">
          <setting>
            <sCSPolicyIDMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/DurandalCAMLGeneratorInstances" />
          </setting>
        </map>
      </maps>
      <components>
        <groupHascomponents>
          <role name="DurandalCAMLGenerator" generation="1" functional="0" release="0" software="C:\Users\bblack\Documents\Visual Studio 2012\Projects\DurandalCAMLGenerator\DurandalCAMLGenerator.Azure\csx\Release\roles\DurandalCAMLGenerator" entryPoint="base\x64\WaHostBootstrapper.exe" parameters="base\x64\WaIISHost.exe " memIndex="1792" hostingEnvironment="frontendadmin" hostingEnvironmentVersion="2">
            <componentports>
              <inPort name="Endpoint1" protocol="http" portRanges="80" />
              <inPort name="Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput" protocol="tcp" />
              <inPort name="Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp" protocol="tcp" portRanges="3389" />
              <outPort name="DurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp" protocol="tcp">
                <outToChannel>
                  <sFSwitchChannelMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/SW:DurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp" />
                </outToChannel>
              </outPort>
            </componentports>
            <settings>
              <aCS name="Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="" />
              <aCS name="Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountEncryptedPassword" defaultValue="" />
              <aCS name="Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountExpiration" defaultValue="" />
              <aCS name="Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountUsername" defaultValue="" />
              <aCS name="Microsoft.WindowsAzure.Plugins.RemoteAccess.Enabled" defaultValue="" />
              <aCS name="Microsoft.WindowsAzure.Plugins.RemoteForwarder.Enabled" defaultValue="" />
              <aCS name="__ModelData" defaultValue="&lt;m role=&quot;DurandalCAMLGenerator&quot; xmlns=&quot;urn:azure:m:v1&quot;&gt;&lt;r name=&quot;DurandalCAMLGenerator&quot;&gt;&lt;e name=&quot;Endpoint1&quot; /&gt;&lt;e name=&quot;Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp&quot; /&gt;&lt;e name=&quot;Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput&quot; /&gt;&lt;/r&gt;&lt;/m&gt;" />
            </settings>
            <resourcereferences>
              <resourceReference name="DiagnosticStore" defaultAmount="[4096,4096,4096]" defaultSticky="true" kind="Directory" />
              <resourceReference name="EventStore" defaultAmount="[1000,1000,1000]" defaultSticky="false" kind="LogStore" />
            </resourcereferences>
            <storedcertificates>
              <storedCertificate name="Stored0Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" certificateStore="My" certificateLocation="System">
                <certificate>
                  <certificateMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/DurandalCAMLGenerator/Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" />
                </certificate>
              </storedCertificate>
            </storedcertificates>
            <certificates>
              <certificate name="Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" />
            </certificates>
          </role>
          <sCSPolicy>
            <sCSPolicyIDMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/DurandalCAMLGeneratorInstances" />
            <sCSPolicyUpdateDomainMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/DurandalCAMLGeneratorUpgradeDomains" />
            <sCSPolicyFaultDomainMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/DurandalCAMLGeneratorFaultDomains" />
          </sCSPolicy>
        </groupHascomponents>
      </components>
      <sCSPolicy>
        <sCSPolicyUpdateDomain name="DurandalCAMLGeneratorUpgradeDomains" defaultPolicy="[5,5,5]" />
        <sCSPolicyFaultDomain name="DurandalCAMLGeneratorFaultDomains" defaultPolicy="[2,2,2]" />
        <sCSPolicyID name="DurandalCAMLGeneratorInstances" defaultPolicy="[1,1,1]" />
      </sCSPolicy>
    </group>
  </groups>
  <implements>
    <implementation Id="1492275d-8437-4006-bcc0-b8a18dd3d905" ref="Microsoft.RedDog.Contract\ServiceContract\DurandalCAMLGenerator.AzureContract@ServiceDefinition">
      <interfacereferences>
        <interfaceReference Id="11a4e536-9308-45f6-91fd-3390bb88364b" ref="Microsoft.RedDog.Contract\Interface\DurandalCAMLGenerator:Endpoint1@ServiceDefinition">
          <inPort>
            <inPortMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/DurandalCAMLGenerator:Endpoint1" />
          </inPort>
        </interfaceReference>
        <interfaceReference Id="a115aaca-137c-4a43-9313-6af75d3027cc" ref="Microsoft.RedDog.Contract\Interface\DurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput@ServiceDefinition">
          <inPort>
            <inPortMoniker name="/DurandalCAMLGenerator.Azure/DurandalCAMLGenerator.AzureGroup/DurandalCAMLGenerator:Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput" />
          </inPort>
        </interfaceReference>
      </interfacereferences>
    </implementation>
  </implements>
</serviceModel>